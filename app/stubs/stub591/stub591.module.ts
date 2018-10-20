import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub591Component} from "./stub591.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub591Component
        }])
    ],
    declarations: [
        Stub591Component
    ]
})
export class Stub591Module {

}
