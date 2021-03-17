<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container" @mouseleave="leave">
      <h2 class="all" @mouseenter="enter">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="search">
        <div class="sort" v-show="isHomeShow || isSearchShow">
          <div class="all-sort-list2">
            <div
              class="item bo"
              v-for="subCategory in categoryData"
              :key="subCategory.categoryId"
            >
              <h3>
                <a
                  @click="toSearch"
                  :data-categoryName="`${subCategory.categoryName}`"
                  :data-category1Id="`${subCategory.categoryId}`"
                  >{{ subCategory.categoryName }}</a
                >
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl
                    class="fore"
                    v-for="sonCategory in subCategory.categoryChild"
                    :key="sonCategory.categoryId"
                  >
                    <dt>
                      <a
                        @click="toSearch"
                        :data-categoryName="`${sonCategory.categoryName}`"
                        :data-category2Id="`${sonCategory.categoryId}`"
                        >{{ sonCategory.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em
                        v-for="item in sonCategory.categoryChild"
                        :key="item.categoryId"
                      >
                        <a
                          @click="toSearch"
                          :data-categoryName="`${item.categoryName}`"
                          :data-category3Id="`${item.categoryId}`"
                          >{{ item.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      isHomeShow: this.$route.path === "/",
      isSearchShow: false,
    };
  },
  methods: {
    ...mapActions(["getTypeNavCategoryData"]),
    enter() {
      this.isSearchShow = true;
    },
    leave() {
      this.isSearchShow = false;
    },
    toSearch(e) {
      const { categoryname } = e.target.dataset;
      const query = {
        categoryName: categoryname,
      };
      if (categoryname) {
        if (e.target.dataset.category1id) {
          const { category1id } = e.target.dataset;
          query.category1Id = category1id;
        }
        if (e.target.dataset.category2id) {
          const { category2id } = e.target.dataset;
          query.category2Id = category2id;
        }
        if (e.target.dataset.category3id) {
          const { category3id } = e.target.dataset;
          query.category3Id = category3id;
        }

        const location = {
          name: "search",
          query,
        };
        if (this.$route.params.xxx) {
          location.params = this.$route.params;
        }
        this.$router.push(location);
      }
      return;
    },
  },
  computed: {
    ...mapState({
      categoryData: (state) => {
        return state.home.categoryData;
      },
    }),
  },
  mounted() {
    if (this.categoryData.lenght) return;
    this.getTypeNavCategoryData();
  },
};
</script>

<style  lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      opacity: 1;
      &.search-enter {
        height: 0;
      }
      &.search-enter-active {
        transition: 0.5s height;
        overflow: hidden;
      }
      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
