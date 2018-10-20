import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub321Component} from "./stub321.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub321Component
        }])
    ],
    declarations: [
        Stub321Component
    ]
})
export class Stub321Module {

}
