import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub991Component} from "./stub991.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub991Component
        }])
    ],
    declarations: [
        Stub991Component
    ]
})
export class Stub991Module {

}
