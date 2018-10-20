import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub935Component} from "./stub935.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub935Component
        }])
    ],
    declarations: [
        Stub935Component
    ]
})
export class Stub935Module {

}
